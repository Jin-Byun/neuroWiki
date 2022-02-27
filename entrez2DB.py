from bs4 import BeautifulSoup
from urllib.request import urlopen
# import xml.etree.ElementTree as ET
import lxml.etree as ET
from bs4 import BeautifulSoup
import pandas as pd
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from tqdm import tqdm
# import nltk
# import concurrent.futures
# nltk.download('stopwords')
# nltk.download('punkt')

db = 'pubmed'
base = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/'
search = "esearch.fcgi?db="
summary = "esummary.fcgi?db="
titles = []
years = []
authors = []
journals = []
allTitle = ""

def initialize_url(lobe):
  query = lobe
  url = base + search + db + "&term=" + query + "%20" + "lobe&retmax=100000&usehistory=y"
  var_url = urlopen(url)
  xmldoc = ET.parse(var_url)
  root = xmldoc.getroot()
  for QueryKey in root.iter('QueryKey'):
    key = QueryKey.text
  for WebEnv in root.iter('WebEnv'):
    web = WebEnv.text
  for Count in root.iter('Count'):
    count = int(Count.text)
  return key, web, count
  
# got from stackoverflow username = jfs 
# html: https://stackoverflow.com/questions/14596884/remove-text-between-and  
def remove_tag(text, brackets="<>"):
  count = [0] * (len(brackets) // 2) # count open/close brackets
  saved_chars = []
  for character in text:
    for i, b in enumerate(brackets):
        if character == b: # found bracket
            kind, is_close = divmod(i, 2)
            count[kind] += (-1)**is_close # `+1`: open, `-1`: close
            if count[kind] < 0: # unbalanced bracket
                count[kind] = 0  # keep it
            else:  # found bracket to remove
                break
    else: # character is not a [balanced] bracket
        if not any(count): # outside brackets
            saved_chars.append(character)
  return ''.join(saved_chars)

def fillArray_string(root): 
  soup = BeautifulSoup(ET.tostring(root, encoding='utf-8').decode('utf-8'), "xml")
  global allTitle
  global titles
  global years
  global authors
  global journals
  for a in tqdm(soup.findAll('DocSum')):
    title = a.find('Item', attrs={'Name':'Title'})
    year = a.find('Item', attrs={'Name':'PubDate'})
    author = a.find('Item', attrs={'Name':'LastAuthor'})
    journal = a.find('Item', attrs={'Name':'Source'})
    titles.append(remove_tag(title.text))
    allTitle += remove_tag(title.text) + " "
    years.append(year.text)
    authors.append(author.text + " et al.")
    journals.append(journal.text)


def  getAllSummary(data):
  if (data[2] > 10000):
    eSummaryRound = data[2] // 10000 + 1
    for i in range(0, eSummaryRound):
      start = str(i * 10000 + 1)
      url = base + summary + db + "&retstart=" + start + "&retmax=10000&query_key=" + data[0] + "&WebEnv=" + data[1]
      summ = urlopen(url)
      xmlSum = ET.parse(summ)
      rootSum = xmlSum.getroot()
      fillArray_string(rootSum)

def word_filter(strTitle):
  wf = []
  stopWords = set(stopwords.words('english'))
  stopWords.add('brain')
  stopWords.add('cortex')
  words = word_tokenize(strTitle.lower())
  for w in tqdm(words):
      if w not in stopWords:
          if len(w) > 2:
            wf.append(w)
  return wf

def makeWordArray(wf):
  str2 = []
  # # loop till string values present in list str
  for i in tqdm(wf):
  #     # checking for the duplicacy
      if i not in str2:
  #         # insert value in str2
          str2.append(i)
  return str2

# def freq_print1(org, new):
#   for i in range(0, len(new)//2):
#     print('Frequency of', new[i], 'is :', org.count(new[i]))
# def freq_print2(org, new):
#   for i in range(len(new)//2 + 1, len(new)):
#     print('Frequency of', new[i], 'is :', org.count(new[i]))

def sort4commonTerm(org, new, lobe):
  count_list = []
  for i in tqdm(range(0, len(new))):
    count_list.append(org.count(new[i]))
  for i in tqdm(range(1, len(new))):
  #     # Sort str2 by frequency
      for h in tqdm(range(0, i-1)):
          if count_list[h] < count_list[i]:
            count_list[h], count_list[i] = count_list[i], count_list[h]
            new[h], new[i] = new[i], new[h]
            break
  f = open("./frquentWords/" + lobe + ".txt", "w", encoding="utf-8")
  for i in range (0, 20):
      f.write(new[i] + ", ")
      print(new[i] + "\t" + str(count_list[i]))
  f.close()

def data2csv(lobe):
  df = pd.DataFrame({'Publish Date':years,'Publisher':journals,'Title':titles,'Written by':authors})
  df.to_csv('./csv/' + lobe + '.csv', index=False, encoding='utf-8')

def resetGlobalVar():
  global allTitle
  global titles
  global years
  global authors
  global journals
  allTitle = ""
  titles = []
  years = []
  authors = []
  journals = []

def main(lobe):
  entrezData = initialize_url(lobe)
  getAllSummary(entrezData)
  wf = word_filter(allTitle)
  str2 = makeWordArray(wf)
  sort4commonTerm(wf, str2, lobe)
  data2csv(lobe)
  resetGlobalVar()

if __name__ == '__main__':
  main('frontal')
  main('parietal')
  main('occipital')
  main('temporal')
  
  # going to try to implement multi-threading for faster data collection, for now, will have to 
  # let the code to sit through the whole things.
  # with concurrent.futures.ProcessPoolExecutor() as executor:
  #   f1 = executor.submit(freq_print1, [wf, str2])
  #   f2 = executor.submit(freq_print2, [wf, str2])
  #   print(f1.result)
  #   print(f2.result)
