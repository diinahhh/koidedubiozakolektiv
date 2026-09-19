document.addEventListener("DOMContentLoaded",function
() {
    const pollForm=document.getElementById("poll-form");
    const daCount = document.getElementById("da-count");
    const neCount = document.getElementById("ne-count");
    let daVotes= 0;
    let neVotes=0;

    pollForm.addEventListener("submit",function(e){
        e.preventDefault();
        const formData= new FormData(pollForm);
        const userVote = formData.get("biraj");

        if (userVote === "da") {
            daVotes++;
        } else if (userVote === "no") {
            neVotes++;
        }
        updateResults();
    });

    function updateResults() {
        daCount.textContent = daVotes;
        neCount.textContent = neVotes;
    }
});

