$(document).ready(function (){


  }
});
function searchRepositories(searchTerms){

}

function showRepositories(event, data) {
  const repos = JSON.parse(this.responseText)
  const repoList = '<ul>' + repos.map(r => {
   return (`
          <li>
            <h2><a href="${r.html_url}">${r.name}</a></h2>
            <p>Watchers: ${r.watchers_count}</p>
            <p>Forks: ${r.forks_count}</p>
            <p>Issues: ${r.open_issues_count}</p>
          </li>`
          )
  }).join('') + "</ul>"
  document.getElementById("repositories").innerHTML = repoList
}

var searchRepositories = () => {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      $('#results').html(renderSearchResults(data))
    }).fail(error => {
      displayError()
    })
}
