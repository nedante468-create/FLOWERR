.center {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #ffd166;
    border-radius: 50%;
    top: 25px;
    left: 25px;
    z-index: 3;
}

.dead-flower {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all 0.8s ease;
    z-index: 2;
}

.dead-petal {
    position: absolute;
    width: 30px;
    height: 15px;
    background-color: #8b4513;
    border-radius: 50%;
    top: 35px;
    left: 25px;
}

.dead-petal:nth-child(1) { transform: rotate(0deg) translateY(-20px); }
.dead-petal:nth-child(2) { transform: rotate(45deg) translateY(-20px); }
.dead-petal:nth-child(3) { transform: rotate(90deg) translateY(-20px); }
.dead-petal:nth-child(4) { transform: rotate(135deg) translateY(-20px); }
.dead-petal:nth-child(5) { transform: rotate(180deg) translateY(-20px); }
.dead-petal:nth-child(6) { transform: rotate(225deg) translateY(-20px); }
.dead-petal:nth-child(7) { transform: rotate(270deg) translateY(-20px); }
.dead-petal:nth-child(8) { transform: rotate(315deg) translateY(-20px); }

.dead-center {
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #654321;
    border-radius: 50%;
    top: 27.5px;
    left: 27.5px;
    z-index: 3;
}

.ground {
    position: absolute;
    width: 140px;
    height: 30px;
    background-color: #8B4513;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50% 50% 0 0;
}

.flower-info {
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    font-weight: bold;
    color: #2d5016;
    font-size: 0.9rem;
}

.instructions {
    margin-top: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    max-width: 800px;
}

.instructions h2 {
    color: #2d5016;
    margin-bottom: 15px;
}

.instructions p {
    margin-bottom: 10px;
    line-height: 1.5;
}

footer {
    margin-top: 30px;
    color: #666;
    text-align: center;
    font-size: 0.9rem;
    padding: 20px;
}

@media (max-width: 768px) {
    .flower-bed {
        gap: 20px;
    }
    
    .flower {
        width: 100px;
        height: 250px;
    }
    
    h1 {
        font-size: 2rem;
    }
}
