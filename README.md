    # Javascript canvas API 활용

```
캔버스의 위치를 가져온후 getContext()로 그림을 그릴 수 있다.
const canvas =document.querySelector("canvas");
const ctx  =canvas.getContext("2d");
```

```
 임의로 만든 'ctx' 변수는 브러쉬와 같은 역할
```

```
ctx.fillRect() 사각형을 그림과 동시에 색을 채워넣는다
(x좌표, y좌표, 너비, 높이)
```

```
ctx.strokeRect() 사각형을 그림과 동시에 선을 채워넣는다
(x좌표, y좌표, 너비, 높이)
```

```
ctx.rect() => 해당좌표에 해당크기만큼의 사각형을 그린다
fill()이나 stroke()로 선이나 색을 채우지 않아서 보이지 않는다.
   (x좌표, y좌표, 너비, 높이)
```

```
ctx.fill() , ctx.strok()
=> 각각 색을 채워넣고 선을 채워넣는다.
fill()은 시작과 끝을 잇고 그사이를 색으로 채워넣는 것
fill(),stroke() 이전에 그린 것들 모두 선이나 색으로 채워넣음

ctx.rect(50,50,50,50)
ctx.beginPath()
ctx.fill()
이처럼 beginPath() 전후로는 불가능
```

```
ctx.fillStyle= "변경할 색상" => 채워넣을 색을 지정 (기본색은 검정)
 ctx.lineWidth = 4 => stroke의 선굵기 조절
beginPath() 전후 상관없이 모두 적용
```

```
 ctx.beginPath() => 지금까지 그린 것들과 다른 경로를 만든다.
 색을 다르게 하거나 선굵기를 다르게 하거나 할 때 필요
```

```
ctx.moveTo(50,50); => 시작점을 정한다.
 ctx.lineTo(100,100) => 시작점에서 인수까지 이동한다.
 이후 fill(), stroke()로 시작점부터 이동한 곳까지를 채워넣는다.
```

```
ctx.arc(); => 해당좌표에 지름만큼의 원을 그려준다
 (x좌표 , y좌표, 원의 지름, 시작점, 끝지점)
 시작점은  0 에서 Math.PI까지 존재함 검색후 그림으로 보는 것이 좋다.
```

```
 ctx.fillText(); => 해당 텍스트를 해당 크기로 해당좌표에 채워 넣는다.
 ctx.strokeText(); => 해당 텍스트를 해당 크기로 해당좌표에 그려 넣는다.
 (넣을 텍스트, x좌표, y좌표, 너비, 높이)
```

```
ctx.save() => context의 설정된 값을 저장한다.(선굵기, 색 등등)
ctx.restore() => context의 설정된 값으로 돌아간다. (save()를 했던 설정지점으로)
```

```
a 태그의 download 속성은 클릭시 url의 값을 다운로드를 가능하게 해준다.
<a href="저장될 파일"download="다운로드시 저장될 파일명">
download의 값으로는 저장될 파일명을 적어준다.
href에는 다운로드시킬 파일을 적어준다.
```

```
 const url = canvas.toDataURL();
 캔버스에 그린 그림을 url값으로 가져온다.
```
