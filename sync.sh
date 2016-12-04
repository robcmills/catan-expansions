aws s3 sync  \
  /Users/robcmills/src/dragons-and-krakens/  \
  s3://vigtavl.net  \
  --exclude '*.DS_Store' \
  --exclude '*.log' \
  --exclude '*.sh' \
  --exclude '*.js' \
  --exclude '*.css' \
  --exclude '*.md' \
  --exclude '*.yml' \
  --exclude '*.gitignore' \
  --exclude '.git/*' \
  --exclude 'dockerfile' \
  --exclude 'stack/*' # \
#  --dryrun
