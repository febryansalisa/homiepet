import CONFIG from '../../globals/config';

const getReviewName = (data) => {
  let datas = data.split(' ')
  if (datas[datas.length - 1].includes('-')) {
    return datas[datas.length - 1].replace('-', '')
  } else {
    return 'anonim'
  }
}

const createRestDetailTemplate = (Rest) => `
<div class="movie-item" style="margin-top:7%; margin-bottom:10%;">
<div class="movie-item__header">
  <img class="movie-item__header__poster" alt="${Rest.nama}"
      <source type="image/webp" srcset=${Rest.foto}>
    <div class="movie-item__header__rating">
  </div>
</div>
<div class="movie-item__content">
  <h3 style="font-size:30px;">${Rest.nama}</h3>
  <p>⭐️ ${Rest?.rating ? Rest?.rating : 0}</p>
  <p>📍${Rest.alamat}</p>

  <div>
</div>
  </div>
  <p style="margin-top:4%; margin-bottom:2%;">-------------------------------------</p>
  <h3 class="title-review">Reviews</h3>
  <div class="detail-review">
  ${Rest?.review.split('","')
    .map(
      (r) => `
        <div class="detail-review-item">
          <div class="review-header">
            <p class="review-name">${getReviewName(r)}</p>
            <p class="review-date">${r?.date ? r?.date : '-'}</p>
          </div>
          <div class="review-body">
            ${r.replace('"', '')}
          </div>
        </div>
      `,
    )
    .join('')}
  </div>
  </div>
</div>
`;

const createRestItemTemplate = (Rest) => `
<div class="movie-item">
<div class="movie-item__header">
  <img class="movie-item__header__posters" alt="${Rest.nama}"
      <source type="image/webp" srcset=${Rest.foto}>
    <div class="movie-item__header__rating">
  </div>
  <p style="font-size:17px;">📍${Rest.nama} | ⭐️${Rest?.rating ? Rest?.rating : 0}</p>
</div>
<div class="movie-item__content">
  <h3><a class="movietxt" href="/#/detail/${Rest.id}">${Rest.nama}</a></h3>
  <p>${Rest.alamat}</p>
</div>
</div>
`; const createLikeDishButtonTemplate = () => `
<button aria-label="Favorite this dish" id="likeButton" class="like">
  <i class="fa fa-heart-o"  aria-hidden="false"></i>
</button>
`;

const createUnlikeDishButtonTemplate = () => `
<button aria-label="Unfavourite this dish" id="likeButton" class="like">
  <i class="fa fa-heart"  aria-hidden="true"></i>
</button>
`;

export {
  createRestItemTemplate, createRestDetailTemplate, createLikeDishButtonTemplate,
  createUnlikeDishButtonTemplate,
};
