document.addEventListener('DOMContentLoaded', function() {
    const flowerBed = document.getElementById('flowerBed');
    const growAllBtn = document.getElementById('growAllBtn');
    const resetBtn = document.getElementById('resetBtn');
    const addFlowerBtn = document.getElementById('addFlowerBtn');
    
    // Массив цветов для разнообразия
    const flowerColors = [
        { bud: '#ff6b6b', petals: '#ff9e6d' },
        { bud: '#6b5b95', petals: '#9a8cc7' },
        { bud: '#88b04b', petals: '#b5c78d' },
        { bud: '#ff6f61', petals: '#ff9a8c' },
        { bud: '#6a5acd', petals: '#9a8ccff' },
        { bud: '#45b7d1', petals: '#8cd1ff' },
        { bud: '#f4a261', petals: '#f7c8a1' },
        { bud: '#e76f51', petals: '#f0a28c' }
    ];
    
    // Класс для создания цветка
    class Flower {
        constructor(id, color) {
            this.id = id;
            this.stage = 1; // 1 - бутон, 2 - цветение, 3 - увядание
            this.color = color;
            this.element = this.createFlowerElement();
            this.updateFlower();
        }
        
        // Создание DOM-элемента цветка
        createFlowerElement() {
            const flowerDiv = document.createElement('div');
            flowerDiv.className = 'flower';
            flowerDiv.dataset.id = this.id;
            
            flowerDiv.innerHTML = 
                <div class="ground"></div>
                <div class="stem"></div>
                <div class="leaf left"></div>
                <div class="leaf right"></div>
                <div class="bud"></div>
                <div class="petals">
                    <div class="petal"></div>
                    <div class="petal"></div>
                    <div class="petal"></div>
                    <div class="petal"></div>
                    <div class="petal"></div>
                    <div class="petal"></div>
                    <div class="petal"></div>
                    <div class="petal"></div>
                    <div class="center"></div>
                </div>
                <div class="dead-flower">
                    <div class="dead-petal"></div>
                    <div class="dead-petal"></div>
                    <div class="dead-petal"></div>
                    <div class="dead-petal"></div>
                    <div class="dead-petal"></div>
                    <div class="dead-petal"></div>
                    <div class="dead-petal"></div>
                    <div class="dead-petal"></div>
                    <div class="dead-center"></div>
                </div>
                <div class="flower-info">Цветок ${this.id}</div>
            ;
            
            // Обработчик клика на цветок
            flowerDiv.addEventListener('click', () => {
                this.nextStage();
            });
            
            return flowerDiv;
        }
        
        // Переход к следующему этапу
        nextStage() {
            this.stage++;
            if (this.stage > 3) {
                this.stage = 1; // Циклический переход: после увядания снова бутон
            }
            this.updateFlower();
        }
        
        // Обновление внешнего вида цветка в зависимости от этапа
        updateFlower() {
            const bud = this.element.querySelector('.bud');
            const petals = this.element.querySelector('.petals');
            const deadFlower = this.element.querySelector('.dead-flower');
            const stem = this.element.querySelector('.stem');
            const flowerInfo = this.element.querySelector('.flower-info');
            
            // Применяем цвет к элементам цветка
            bud.style.backgroundColor = this.color.bud;
            this.element.querySelectorAll('.petal').forEach(petal => {
                petal.style.backgroundColor = this.color.petals;
