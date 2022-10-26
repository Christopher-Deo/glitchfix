//Getting previously entered glitches from memory upon page load
document.addEventListener("DOMContentLoaded", function() {
  fetchGlitch();
});

function fetchGlitch(){
    let issues = JSON.parse(localStorage.getItem('issues'));
    let issueList = document.getElementById('glitchList');
    //initializing the issueList variable as an empty string 
    issueList.innerHTML = '';
  
    for (let i = 0; i < issues.length; i++) {
      let id = issues[i].id;
      let projectName = issues[i].project;
      let errorMessage = issues[i].message;
      let desc = issues[i].description;
      let severity = issues[i].severity;
      let assignedTo = issues[i].assignedTo;
      let status = issues[i].status;
     //dynamically adding data to the glitch list
      issueList.innerHTML += 
        '<div class="well">'+
        '<h6>Issue ID: ' + id + '</h6>'+
        '<p><span class="label label-info">' + status + '</span></p>'+
        '<h4>' + message + '</h4>'+
        '<h5>' + desc + '</h5>'+
        '<p><span><i class="glyphicon glyphicon-time"</span> ' + severity + ' '+
        '<span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
        '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\''+id+'\')">Resolved</a> '+
        '<a href="#" class="btn btn-danger" onclick="deleteIssue(\''+id+'\')">Delete</a>'+
        '</div>';
        }
  }

//creating function to capture and store form data to local memory
function saveIssue(e) {
    let issueId = chance.guid();
    let name = document.getElementById('projectNameInput').value;
    let errorMsg = document.getElementById('errorMessageInput').value;
    let issueDesc = document.getElementById('glitchDescriptionInput').value;
    let issueSeverity = document.getElementById('glitchSeverityInput').value;
    let issueAssignedTo = document.getElementById('glitchAssignedToInput').value;
    let issueStatus = 'Open';
    let issue = {
      id: issueId,
      message: message,
      description: issueDesc,
      severity: issueSeverity,
      assignedTo: issueAssignedTo,
      status: issueStatus
    }
    
    if (localStorage.getItem('issues') === null) {
     let issues = [];
      issues.push(issue);
      localStorage.setItem('issues', JSON.stringify(issues));
    } else {
      let issues = JSON.parse(localStorage.getItem('issues'));
      issues.push(issue);
      localStorage.setItem('issues', JSON.stringify(issues));
    }
    
    document.getElementById('glitchInputForm').reset();
   
    fetchIssues();
    
    e.preventDefault(); 
  }

  //function to set the issue to closed / resolved status
  function setStatusClosed (id) {
    let issues = JSON.parse(localStorage.getItem('issues'));
    
    for(var i = 0; i < issues.length; i++) {
      if (issues[i].id == id) {
        issues[i].status = "Closed";
      }
    }
      
    localStorage.setItem('issues', JSON.stringify(issues));
    
    fetchIssues();
  }

  //function to delete the issue from the glitch list
  function deleteIssue (id) {
    let issues = JSON.parse(localStorage.getItem('issues'));
    
    for(let i = 0; i < issues.length; i++) {
      if (issues[i].id == id) {
        issues.splice(i, 1);
      }
    }
    
    localStorage.setItem('issues', JSON.stringify(issues));
    
    fetchIssues();
  }



  //saving the form data to local storage upon submission
  document.getElementById('glitchInputForm').addEventListener('submit', saveIssue);

