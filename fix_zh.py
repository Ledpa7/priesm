import os

file_path = r'c:\Users\wjdwl\.gemini\antigravity\scratch\6-priesm-homepage\src\App.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if "spectrumDesc: '一个提问引发多元智能" in line:
        lines[i] = "    spectrumDesc: '一个提问引发多元智能的爆发。我们重新定义 AI 交互의 연계。',\n" # Wait, I still have Korean there? No!
        lines[i] = "    spectrumDesc: '一个提问引发多元智能的爆发。我们重新定义 AI 交互的边界。',\n"
        print(f"Fixed line {i+1}")
        break

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)
