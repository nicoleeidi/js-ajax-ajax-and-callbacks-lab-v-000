$(document).ready(function (){

});


function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}


function searchRepositories(){
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(data) {
      $('#results').html(
        data.items.map( result => {
          return `
              <div>
                <h2><a href="${result.html_url}">${result.name}</a></h2>
                <p><a href="#" data-repository="${result.name}" data-owner="${result.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
                <p>${result.description}</p>
              </div>
              <hr>
            `
        })
      )
      }).fail(error => {
      displayError()
    })
}
function showCommits(el){
  $.get(`https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`, function(data) {
     $('#details').html(renderCommits(data))
   }).fail(error => {
     displayError()
   })
}


var renderCommits = (data) => {
  let result = data.map((commit)=>  return `<li><h3>${commit.sha}</h3><p>${commit.commit.message}</p></li>`).join('')
  return `<ul>${result}</ul>`
}
