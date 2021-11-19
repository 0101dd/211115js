export default {
  type: 'flex',
  altText: 'Ouro Kronii',
  contents: {
    type: 'bubble',
    hero: {
      type: 'image',
      url: 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/31329_767531.png',
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover'
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'Ouro Kronii',
          weight: 'bold',
          size: 'xl',
          align: 'center'
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'A member of the Council and the Warden of "Time," the third concept birthed by the Gods and the one most intrinsically linked with mankind.',
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  align: 'center',
                  flex: 5
                }
              ]
            },
            {
              type: 'button',
              action: {
                type: 'uri',
                label: 'more information',
                uri: 'https://en.hololive.tv/portfolio/items/ouro-kronii'
              }
            }
          ]
        }
      ]
    },
    footer: {
      type: 'box',
      layout: 'horizontal',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'uri',
            label: 'Twitter',
            uri: 'https://twitter.com/ourokronii'
          }
        },
        {
          type: 'button',
          style: 'link',
          height: 'sm',
          action: {
            type: 'uri',
            label: 'YouTube',
            uri: 'https://www.youtube.com/channel/UCmbs8T6MWqUHP1tIQvSgKrg'
          }
        },
        {
          type: 'spacer',
          size: 'sm'
        }
      ],
      flex: 0
    }
  }
}
