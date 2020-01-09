const LinkFileComponent = {
  // Widget that allows linking to a file in the Media Gallery,
  // such as a PDF, from the markdown body
  id: "LinkFile",
  label: "Link File",
  fields: [
    {name: 'text', label: 'Link Text', widget: 'string'},
    {name: 'file', label: 'File', widget: 'file' }
  ],
  pattern: /^<a target="_blank" rel="noopener noreferrer" href="(.*)">(.*)<\/a>$/,
  fromBlock: function(match) {
    return {
      file: match[1],
      text: match[2]
    };
  },
  toBlock: function({file, text}) {
    return `<a target="_blank" rel="noopener noreferrer" href="${file}">${text}</a>`
  },
  toPreview: function({file, text}) {
    return `<a target="_blank" rel="noopener noreferrer" href="${file}">${text}</a>`
  }
}

export default LinkFileComponent
