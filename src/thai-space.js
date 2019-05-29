import sketch from 'sketch'

const recursiveFindText = (elements) => {
  try {
    let texts = []
    elements.forEach(element => {
      if( element.type === 'Text' ){
        texts.push(element)
      }else if(element.layers && element.layers.length){
        const childTexts = recursiveFindText(element.layers) 
        texts = [
          ...texts,
          ...childTexts,
        ]
      }
    })
    return texts
  } catch (error) {
    return []
  }
}

const getAllTextsInDocument = () => {
  let Document = sketch.getSelectedDocument()
  let texts = []
  Document.pages.map((page) => {
    if(page.layers && page.layers.length){
      texts = [
        ...texts,
        ...recursiveFindText(page.layers),
      ]
    }
  })
  return texts
}

const addSpaceToLast = (texts) => {
  if(texts && texts.length){
    texts.map(text => {
      text.text = text.text.replace(/\s*$/,'  ');
    })
  }
}

const addEmojiToLast = (texts) => {
  texts.map(text => {
    text.text = text.text+' 🙌'
    text.style.fills=[{
      color: '#ff0000',
      fillType: sketch.Style.FillType.Color,
    }]
  })
}

export default function() {
  sketch.UI.message("Start adding space...")
  const texts = getAllTextsInDocument()
  addSpaceToLast(texts)
  sketch.UI.message(`🙌 Finish add space in ${texts.length} texts`)
}

export const addEmoji = () => {
  sketch.UI.message("Start adding 🙌...")
  const texts = getAllTextsInDocument()
  addEmojiToLast(texts)
  sketch.UI.message(`🙌 Finish add 🙌 in ${texts.length} texts (Pls. Cmd + Z for undo)`)
}
