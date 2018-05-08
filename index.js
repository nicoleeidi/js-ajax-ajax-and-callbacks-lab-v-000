$(document).ready(function (){

});




var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
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
var displayError = () => $('#errors').html("I'm sorry, there's been an error. Please try again.")
function showCommits(){

}
