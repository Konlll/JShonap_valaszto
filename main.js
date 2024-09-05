
const months = [
    "Január",
    "Február",
    "Március",
    "Április",
    "Május",
    "Június",
    "Július",
    "Augusztus",
    "Szeptember",
    "November",
    "December"
]

months.forEach(month => {
    const option = document.createElement("option")
    option.innerText = month
    option.value = month
})