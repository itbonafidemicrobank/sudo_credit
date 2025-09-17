
Antes de hacer nuevos cambios: desde `<develop-frontend>`
**git pull --rebase origin develop-frontend**

Al cambiar de branch: DE `<develop-frontend-login>` A `<develop-frontend>`
**git fetch origin**

Para crear una nueva funcionalidad: `<develop-frontend>`
**git checkout -b develop-frontend-*logout***

Antes de cambiar de rama hay que subir los cambios con:
**git status**

**git add** .      `<develop-frontend-logout>`

**git commit -m "message"**     `<develop-frontend-logout>`

Luego volver a la rama develop-frontend
**git checkout develop-frontend     `<develop-frontend>`**

Revisamos que si hay cambios que se han hecho en remote
**git fetch origin      `<develop-frontend>`**

Combinamos los cambios de logout con los que tenemos en frontend
**git merge develop-frontend-logout      `<develop-frontend>`
git push origin develop-frontend      `<develop-frontend>`**

SI hay un fichero en verde hago *commit
SI esta en rojo hago *add
