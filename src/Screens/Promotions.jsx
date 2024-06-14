import React from 'react';
import { BiCoin } from 'react-icons/bi';

const Promotions = () => {
    return (
        <div className='grid grid-cols-12 p-12 gap-8'>
            <div className="col-span-12 md:col-span-4 space-y-4">
                <p className='text-red-600 text-4xl font-bold'>Wingo Color Prediction Game</p>
                <p>The Wingo Color Prediction Game has become a favorite among online gaming enthusiasts in India, known for its simplicity and the excitement it offers. This game, which revolves around predicting colors, is an easy yet thrilling way to win prizes. Its popularity stems from its straightforward gameplay, appealing to everyone who loves a bit of fun competition and the chance to win.</p>
                <p>Wingo stands out in the world of color prediction games due to its quick and engaging format. Whether you’re looking for a quick game to brighten up your day or a fun challenge to test your prediction skills, Wingo has something for everyone. This game has drawn a vast audience in India, captivated by its simple approach and the potential for rewards.</p>
            </div>
            <div className="col-span-12 md:col-span-4 space-y-4">
                <p className='text-red-600 text-4xl font-bold'>Trx Hash</p>
                <p>Trx Hash is a unique game that involves predicting the outcome of TRON blockchain transactions. Players guess the hash value of the next block, and if their prediction matches, they win. This game combines elements of blockchain technology with traditional prediction games, providing a modern and exciting experience for players.</p>
                <p>Trx Hash is popular among cryptocurrency enthusiasts who enjoy the blend of tech-savviness and gaming. The game’s format is straightforward yet engaging, making it accessible to both new and experienced players in the world of crypto gaming.</p>
            </div>
            <div className="col-span-12 md:col-span-4 space-y-4">
                <p className='text-red-600 text-4xl font-bold'>K3 Lotre</p>
                <p>K3 Lotre is a lottery-style prediction game that offers a simple and entertaining way to test your luck. Players select numbers and wait for the draw to see if their chosen combination matches the winning numbers. The simplicity of the game, combined with the potential for significant rewards, makes it a popular choice among lottery enthusiasts.</p>
                <p>With K3 Lotre, players can enjoy the thrill of the lottery with the added excitement of real-time draws and instant results. It's an easy game to get into and can provide hours of entertainment for those who love number-based games of chance.</p>
            </div>
            <div className="col-span-12 md:col-span-4 space-y-4">
                <p className='text-red-600 text-4xl font-bold'>5D Lotre</p>
                <p>5D Lotre takes the traditional lottery game to the next level with five-digit combinations. Players select their five-digit numbers and participate in draws to see if they can match the winning combination. The game offers higher stakes and greater rewards, making it an exciting option for lottery fans looking for a bigger challenge.</p>
                <p>5D Lotre is designed for those who enjoy the complexity and anticipation of multi-digit lottery games. The added digits increase the potential for larger prizes, adding to the excitement and appeal of the game.</p>
            </div>
            <div className="col-span-4">
                <div className="rounded-full text-red-600 size-12 md:size-52 hover:rotate-45 transition-all relative border-2 border-red-600/50 flex items-center justify-center">
                    <img src="coin-1.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Promotions;
