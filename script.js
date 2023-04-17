const dropArea = document.querySelector('.drag-files')

dropArea.addEventListener('dragover', () => {     /**draghover: arraste sobre*/
  dropArea.classList.add('dragover')
}) 

dropArea.addEventListener('dragleave', () => {    /*dragleave: arrastar e largar */
  dropArea.classList.remove('dragover')
}) 