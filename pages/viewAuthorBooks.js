import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthorBooks = (obj, bookArray) => {
  clearDom();

  let domString = `
  <div class="mt-5 d-flex flex-column" style="color: white">
    <div class="d-flex flex-row">
      <h5 class="card-title">${obj.first_name} ${obj.last_name}</h5>
      <p class="card-text bold">${obj.favorite ? '<span class="badge badge-info sale-badge"><i class="fa fa-star" aria-hidden="true"></i></span>' : ''}</p>
    </div>
    <div class="d-flex flex-row">
      <h6 class="card-subtitle mb-2">Author Email: </h6>
      <a href="url">${obj.email}</a>
    </div>
    <div class="d-flex flex-row">
      <i class="fas fa-edit btn btn-info" id="update-author--${obj.firebaseKey}"></i>
      <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${obj.firebaseKey}"></i>
    </div>
    <hr>
   </div>`;

  bookArray.forEach((book) => {
    domString += `
      <div class="card">
        <img class="card-img-top" src=${book.image} alt=${book.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${book.title}</h5>
            <p class="card-text bold">${book.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${book.price}` : `$${book.price}`}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-book-btn--${book.firebaseKey}"></i>
            <i id="edit-book-btn--${book.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-book-btn--${book.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });

  renderToDOM('#view', domString);
};

export default viewAuthorBooks;
