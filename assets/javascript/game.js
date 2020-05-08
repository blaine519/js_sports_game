const teamOneShootButton = document.querySelector("#teamone-shoot-button")
let teamOneShots = document.querySelector("#teamone-numshots")
let teamOneGoals = document.querySelector("#teamone-numgoals")

const teamTwoShootButton = document.querySelector("#teamtwo-shoot-button")
let teamTwoShots = document.querySelector("#teamtwo-numshots")
let teamTwoGoals = document.querySelector("#teamtwo-numgoals")

const resetButton = document.querySelector("#reset-button")
let numResets = document.querySelector("#num-resets")


teamOneShootButton.addEventListener("click", function() {
    console.log("teamOneShootButton clicked")
    let newTeamOneShotCount = Number(teamOneShots.innerHTML) + 1
    teamOneShots.innerHTML = newTeamOneShotCount

    if (Math.random() < 0.30) {
        let newTeamOneGoals = Number(teamOneGoals.innerHTML) + 1
        teamOneGoals.innerHTML = newTeamOneGoals
    }
})


teamTwoShootButton.addEventListener("click", function() {
    console.log("teamTwoShootButton clicked")
    let newTeamTwoShotCount = Number(teamTwoShots.innerHTML) + 1
    teamTwoShots.innerHTML = newTeamTwoShotCount

    if (Math.random() < 0.30) {
        let newTeamTwoGoals = Number(teamTwoGoals.innerHTML) + 1
        teamTwoGoals.innerHTML = newTeamTwoGoals
    }
})


resetButton.addEventListener("click", function() {
    console.log("resetButton clicked")
    let newResetCount = Number(numResets.innerHTML) + 1
    numResets.innerHTML = newResetCount

    teamOneShots.innerHTML = 0
    teamOneGoals.innerHTML = 0
    teamTwoShots.innerHTML = 0
    teamTwoGoals.innerHTML = 0
})