# peterHillWebsite
- The root folder/ directory within is found under: "/Users/rorymartin/Desktop/Other/peterHillRepository/peterHillWebsite"
- To edit within the repository use:
      > git add -A (To add all)
      > git commit -am "message" (To commit the files)
      > git push (To upload the files)

# Creating the SSH Git Root Folders:
- Create a root directory and cd to it.
- In terminal in this cd: 
          ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
- Enter a file in which to save the key (/Users/you/.ssh/id_rsa): // Press [ENTER] for default
- Enter passphrase (empty for no passphrase): // For password.
          eval "$(ssh-agent -s)"
          ssh-add -K ~/.ssh/id_rsa

- Copy the contents of the file ~/.ssh/id_rsa.pub to your SSH keys in your GitHub account settings.
          ssh -T git@github.com // Should connect a say welcome.
          git clone git://github.com/username/your-repository
          git remote set-url origin git@github.com:username/your-repository.git
          git add -A
          git config --global user.email "your email" // Now you must add a user
          git config --global user.name "your name"
          git commit -am "my update msg"
          git config --global matching // Must change the config committing to matching files
          git push

- Fore more commands: https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html
