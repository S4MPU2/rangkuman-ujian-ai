#!/usr/bin/env python3
"""Build rangkuman_ujian_ai.html from fragment JS files."""
import os, glob

HERE = os.path.dirname(os.path.abspath(__file__))
BASE_HTML = os.path.join(HERE, 'base_template.html')
OUT_HTML = os.path.join(os.path.dirname(HERE), 'rangkuman_ujian_ai.html')

injs = sorted(glob.glob(os.path.join(HERE, 'm[0-9].js')))
segments = []
for p in injs:
    with open(p, encoding='utf-8') as f:
        raw = f.read().strip()
        segments.append(raw)  # each file is a complete: { tag:'M',... html:`...content...` }

data_str = ',\n'.join(segments)

# Read base template
with open(BASE_HTML, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('/*MODULES*/', data_str)

# Write output
with open(OUT_HTML, 'w', encoding='utf-8') as f:
    f.write(content)

print('Built', OUT_HTML, 'with', len(segments), 'modules')