import os

file_path = r'c:\Users\wjdwl\.gemini\antigravity\scratch\6-priesm-homepage\src\App.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Replace Chinese Spectrum part
text = text.replace("spectrumBadge: 'The Spectrum',", "spectrumBadge: '智能光谱',")
text = text.replace("spectrumTitle: 'Priesm Spectrum',", "spectrumTitle: 'Priesm 光谱',")
# And also ensure spectrumDesc is clean
import re
text = re.sub(r"spectrumDesc: '一个提问引发多元智能.*',", "spectrumDesc: '一个提问引发多元智能的爆发。我们重新定义 AI 交互의 연계。',", text)
# Wait, I want it to be clean Chinese.
text = re.sub(r"spectrumDesc: '一个提问引发多元智能.*',", "spectrumDesc: '一个提问引发多元智能的爆发。我们重新定义 AI 交互的边界。',", text)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text)
print("Updated App.tsx translations.")
