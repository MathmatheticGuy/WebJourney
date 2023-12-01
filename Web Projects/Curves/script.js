const tween = KUTE.fromTo(
    '#blob1',
    {path: '#blob1'},
    {path: '#blob2'},
    {repeat: 999, duration: 3000, yoyo: true},
)

const tween2 = KUTE.fromTo(
    '#blob2',
    {path: '#blob3'},
    {repeat: 999, duration: 3000, yoyo: true},
)

tween.start()
tween2.start()
