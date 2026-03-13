import os

file_path = r'c:\Users\wjdwl\.gemini\antigravity\scratch\6-priesm-homepage\src\App.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Fix the Chinese heroDesc with Korean characters
import re
text = re.sub(r"heroDesc: <>告.*即可同时唤醒 Gemini, ChatGPT 和 Claude。<br />您只需从海量答案中择优而用。</>,", 
              "heroDesc: <>告别为了对比而进行的标签页切换。<br />只需一个提问，即可同时唤醒 Gemini, ChatGPT 和 Claude。<br />您只需从海量答案中择优而用。</>,", 
              text)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text)
print("Fixed Chinese heroDesc.")
