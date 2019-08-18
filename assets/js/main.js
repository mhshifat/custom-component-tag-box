document.querySelectorAll(".container").forEach(item => {
  const container = item;
  const inputBox = container.querySelector(".input-box");
  const input = container.querySelector("input");
  const tags = [];
  displayTags(tags);

  function displayTags(tags) {
    inputBox.innerHTML = "";
    inputBox.appendChild(input);
    input.value = "";
    input.focus();
    for (const tag of [...new Set(tags)]) {
      const div = document.createElement("div");
      div.setAttribute("class", "tag");
      const span = document.createElement("span");
      span.setAttribute("class", "tag-text");
      const span1 = document.createElement("span");
      span1.setAttribute("class", "tag-icon");
      span.innerHTML = tag;
      const i = document.createElement("i");
      i.setAttribute("class", "material-icons");
      i.innerHTML = "clear";
      span1.appendChild(i);
      span1.addEventListener("click", function(e) {
        e.stopPropagation();
        tags.splice(
          tags.findIndex(t => t === this.previousSibling.innerHTML),
          1
        );
        displayTags(tags);
      });
      div.appendChild(span);
      div.appendChild(span1);
      inputBox.prepend(div);
    }
  }

  input.addEventListener("change", function(e) {
    e.stopPropagation();
    tags.unshift(this.value.toUpperCase());
    displayTags(tags);
  });

  document.querySelector("body").addEventListener("click", () => {
    input.focus();
  });
});
