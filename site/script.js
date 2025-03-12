document.addEventListener("DOMContentLoaded", function() {
    const memberCountElement = document.getElementById("member-count");

    fetch("https://discord.com/api/v9/invites/P8EBtdpPWX?with_counts=true")
        .then(response => response.json())
        .then(data => {
            if (data.approximate_member_count)