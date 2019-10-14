console.log('SCRIPT START')

            console.log('Declare testable functions......................')

            function volume(x, y, z) { return x * y * z }
            console.log('Defined volume=' + volume)

            window.addEventListener('load', (event) => {
                console.log('  Starting initialization ')
                if (localStorage.getItem('name')) {
                    document.getElementById('name').value = localStorage.getItem('name')
                    console.log(`  Stored guest = ${localStorage.name}`)
                }
                if (localStorage.getItem('length')) {
                    document.getElementById('length').value = parseInt(localStorage.length)
                    console.log(`  Stored length = ${localStorage.length}`)
                }
                if (localStorage.getItem('width')) {
                    document.getElementById('width').value = parseInt(localStorage.width)
                    console.log(`  Stored width = ${localStorage.width}`)
                }
                if (localStorage.getItem('height')) {
                    document.getElementById('height').value = parseInt(localStorage.height)
                    console.log(`  Stored height = ${localStorage.height}`)
                }
                console.log('  Finished initialization')
            })

            document.getElementById('calc').addEventListener('click', () => {
                console.log('  Starting clicker click handler')
                const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
                const s = document.getElementById('name').value
                console.log('s=' + s)
                const i = parseInt(document.getElementById('length').value)
                console.log('i=' + i)
                const j = parseInt(document.getElementById('width').value)
                console.log('j=' + j)
                const k = parseInt(document.getElementById('height').value)
                console.log('k=' + k)
                const ct = origCount + 1
                const ans = s + ', your volume is ' + volume(i, j, k) + '. This has been run ' + ct + ' times.'
                document.getElementById('result').innerHTML = ans
                localStorage.setItem('countOfClicks', ct)  // define a string key to store + its value
                localStorage.setItem('name', s)
                localStorage.setItem('length', i)
                localStorage.setItem('width', j)
                localStorage.setItem('height', k)
                console.log('  Finished clicker click handler')
            })

            document.getElementById('clear').addEventListener('click', () => {
                console.log('  Starting wiper click handler')
                localStorage.removeItem('countOfClicks')
                localStorage.removeItem('name')
                localStorage.removeItem('length')
                localStorage.removeItem('width')
                localStorage.removeItem('height')
                console.log('  Finished wiper click handler - localStorage entries removed')
            })