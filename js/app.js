'use strict';

(function () {
    class Book {
        constructor(title, isbn) {
            this.title = title;
            this.isbn = isbn;
        }

        showInfo ()  {
            return this.title + this.isbn
        };
    }

    class Reader{
        constructor([name, surname, cardId, address, phone]) {
            this.name = name;
            this.surname = surname;
            this.cardId = cardId;
            this.address = address;
            this.phone = phone;
            this.readerBooks = [];
            this.card = null;
        }

        addBook(book, isbn) {
            this.readerBooks.push({bookTitle: book, isbn: isbn});
        };
        getBooks() {
            return this.readerBooks;
        };

    }

    // show form
    const newReader = document.querySelector('.new-reader');
    newReader.addEventListener('click', () =>{
        const readerForm = document.querySelector('.form-reader');
        readerForm.classList.toggle('d-none');
    });

    // get reader data
    const addReader = document.querySelector('.add-reader');
    addReader.addEventListener('click', (e) => {
        e.preventDefault();
        const formData = document.querySelectorAll('.reader');

        let readerData = [];
        for(let node of formData) {
            readerData.push(node.value)
        }
        let newReader = new Reader(readerData);

        return new Card(newReader)
    });

    class Card {
        constructor(Reader) {
            this.readers = document.querySelector('.readers');

            this.card = document.createElement('div');
            this.card.classList.add('card');

            this.cardBody = document.createElement('div');
            this.cardBody.classList.add('card-body');

            this.cardTitle = document.createElement('h5');
            this.cardTitle.classList.add('card-title');
            this.cardTitle.textContent = `Card ID: ${Reader.cardId}. ${Reader.name} ${Reader.surname}`;

            this.cardSubtitleAdress = document.createElement('h6');
            this.cardSubtitleAdress.classList.add('card-subtitle', 'mb-2', 'text-muted');
            this.cardSubtitleAdress.textContent =`Address: ${Reader.address}`;

            this.cardSubtitlePhone = document.createElement('h6');
            this.cardSubtitlePhone.classList.add('card-subtitle', 'mb-2', 'text-muted');
            this.cardSubtitlePhone.textContent =`Phone: ${Reader.phone}`;

            this.cardTextTitle = document.createElement('h5');
            this.cardTextTitle.textContent = 'Borrowed Books: ';

            this.cardText = document.createElement('p');
            this.cardText.classList.add('card-text');

            this.cardAddBookButton = document.createElement('button');
            this.cardAddBookButton.classList.add('btn', 'btn-primary', 'add-book');
            this.cardAddBookButton.textContent = 'Add Book';

            this.cardTitle.appendChild(this.cardSubtitleAdress);
            this.cardTitle.appendChild(this.cardSubtitlePhone);
            this.cardBody.appendChild(this.cardTitle);
            this.cardBody.appendChild(this.cardTextTitle);
            this.cardBody.appendChild(this.cardText);
            this.card.appendChild(this.cardBody);
            this.card.appendChild(this.cardAddBookButton);
            this.readers.appendChild(this.card);
        }
    }

})();
