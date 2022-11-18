#!/bin/bash
git init
add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:danya-portfolio/re_tester.git
git push -u origin main