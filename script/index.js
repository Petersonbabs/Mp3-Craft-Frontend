// Get any html element
const getElement = (name) => {
    const element = document.querySelector(name);
    if (element) return element
    console.log(`You tried getting an element with a name that does not exist: ${name}`)
}


// VARIABLES
const pasteLinkForm = getElement('.paste-link-form');
const submitLinkInput = getElement('#submit-link-input')
const editMp3Form = getElement('.edit-mp3-form')



// FUNCTIONS

// submit mp3 link
const submitMp3Link = (e) => {
    const link = submitLinkInput.value
    const button = e.submitter
    button.disabled = true
    const loader = getElement('#pasteLinkLoader')
    loader.classList.remove('d-none')
    const result = getElement('.result')

    try {

    } catch (error) {
        console.log(error)
    } finally {
        setTimeout(() => {
            console.log('done!')
            button.disabled = false
            pasteLinkLoader.classList.add('d-none')
            result.classList.remove('d-none')
            result.scrollIntoView({ behavior: 'smooth' })
        }, 5000)

    }
}

const editMp3 = (e) => {
    const button = e.submitter
    const details = {
        coverArt: e.target[0],
        title: e.target[1],
        description: e.target[2],
        artist: e.target[3],
        album: e.target[4],
        comment: e.target[5],
    }
    button.disabled = true
    const loader = getElement('#editMp3Loader')
    loader.classList.remove('d-none')

    try {

    } catch (error) {

    } finally {
        setTimeout(() => {
            loader.classList.add('d-none')
            button.disabled = false
            button.style.background = 'var(--pink)'
            console.log(details)
        }, 5000)
        const { comment } = details

    }

}


const actions = () => {

    // submit link 
    pasteLinkForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const myModal = new bootstrap.Modal(document.getElementById('modal'));
        const title = getElement('.modal-title');
        const content = getElement('.modal-body');
        const mp3Regex = /^(https?:\/\/)?([^\s\/$.?#].[^\s]*)\.mp3(\?.*)?$/


        if (submitLinkInput.value.trim() == '') {
            title.textContent = 'Oops!'
            content.textContent = 'You need to paste a link first.'
            myModal.show()
            return
        }

        if (!mp3Regex.test(submitLinkInput.value)) {
            title.textContent = 'Oops!'
            content.textContent = 'Please Use a valid mp3 url.'
            myModal.show()
            return
        }

        submitMp3Link(e)



    })

    // edit music
    editMp3Form.addEventListener('submit', (e) => {
        e.preventDefault()
        editMp3(e)

    })

}

actions()