function update(markdown) {
	document.getElementById('preview').innerHTML = marked(markdown);
}

let editor = document.getElementById('editor')

editor.addEventListener('input', (event) => {
	update(editor.value);
})

update(editor.value);