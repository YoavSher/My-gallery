'use strict'


initPage()
function initPage() {
  eventsListener()
  renderProjects()
  // renderModal()
}

function eventsListener() {
  $('.btn-lg').click(onSubmitMail)
 
}

function renderProjects() {
  console.log('im render');

  const strHtml = gProjs.map(proj => `
        <article class="col-md-4 col-sm-6 portfolio-item" data-id="${proj.id}">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid my-pic" src=${proj.img} alt="">
      </a>
      <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
      </div>
      </article>
      `
  )

  $('.row.grid').html(strHtml)
  $('.row.grid').find('.portfolio-link').on('click', function () {
    const projId = $(this).closest('article').data('id')
    renderModal(projId)
  })
}


function renderModal(projId) {

  var proj = getProjById(projId)
  const $elModal = $('.modal-body')
  $elModal.children('h2').text(proj.name)
  $elModal.children('.item-intro.text-muted').text(proj.title)
  $elModal.children('.description').text(proj.desc)
  $elModal.find('.date').text(`Date: ${getDate(projId)}`)
  $elModal.find('.catg').text(`Labels: ${proj.labels.join(', ')}`)
  $elModal.children('img').prop('src', proj.img)
  $('.goto-url').click(() => {
    window.open(proj.url)
    return false
  })
}

function onSubmitMail(email) {
  const $elEmail = $('.container.contact')
    $elEmail.find('.email').val()
    console.log( $elEmail.find('.email').val());
  // submitMail(email)
}