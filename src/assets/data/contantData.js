import dblCard from '../img/dblCard.png';
import dblPhone from '../img/dblPhone.png';
import dblPhoneCircle from '../img/dblPhoneCircle.png';
import dblPhoneFlag from '../img/dblPhoneFlag.png';
import phone600 from '../img/phone600.png';
import phoneAndCard from '../img/phoneAndCard.png';
import phoneCard from '../img/phoneCard.png';

import stores from '../UI/stores/Stores.js';
import WhiteStore from '../UI/whiteStores/WhiteStores.js';
// console.log(stores)
const firstContentData = {
    phones: [
        {
            beforeTitle: 'In Every beginning, there is chaos',
            title: ['Peaceful shopping.', 'MindFul money'],
            text: ['See how we can help with making your shopping experience and money management more ZEN.'],
            img: phoneAndCard,
            component: stores,
            isRight: true
        },
        {
            title: ['1-year warranty boost'],
            text: [
                'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.',
                'When you buy any electronics with your ZEN shopping Mastercard®, their warranty gets extended by one year. How does it work? It simply does. Automatically.'
            ],
            img: dblPhone,
            component: false,
            isRight: false
        },
        {
            title: ['ZEN Care'],
            text: [
                `Shopping online is usually a delightful experience. Until it's not.`,
                'Until something you buy, proves to be faulty, missing or a totally wrong item, you’re in for long product return procedures.',
                `But, here comes ZEN Care: a free, built-in shopping protection. You can rest assured we’ll handle all of the transaction-related problems faster and with higher success rates. Where lone consumers can be ignored or dumped by dishonest merchants, ZEN doesn't get discouraged. ZEN persists.`
            ],
            img: phone600,
            component: false,
            isRight: true
        },

    ]
}

const secondContentData = {
    phones: [
        {
            title: ['ZEN shopping Mastercard'],
            text: ['You shouldn’t be bound to use one card at a time, especially when it has so many benefits! With ZEN, you can manage your shopping and finances with both physical and virtual cards. It’s convenient, streamlined, and works like a charm. You can have a shopping card, a subscription card, and whatever other cards that make sense to you.'],
            img: dblCard,
            component: WhiteStore,
            isRight: true
        },
        {
            title: ['Shopping with no fees'],
            text: [
                'Online shopping is flawed with all kind of fees. Currency exchange fees, processing fees and even fees for having multiple fees. Getting rid of them became our hobby. Same goes for ATM withdrawal fees.',
                'Enjoy your money globally. Every uncut part of it. Keep reading. ZEN goes beyond shopping with a fully functional account.'
            ],
            img: phoneCard,
            component: false,
            isRight: false
        },
        {
            title: ['One app, one account,', 'many currencies'],
            text: [
                `ZEN Mastercard® was made for spending money. ZEN account is here to store and manage it peacefully, from the inside of your pocket.`,
                'You can use it just like a regular account, as it has its own IBAN and works just the way any bank account would — but better. Store up to 30 currencies and transfer them easily in many ways.'
            ],
            img: dblPhoneFlag,
            component: false,
            isRight: true
        },
        {
            title: ['Quick and easy', 'account creation'],
            text: [
                `Now, you might be thinking that it’s just like any other account creation… Long, tiresome and full of endless blanks to fill in. Well, it’s not.`,
                'We have designed the whole process to make it the simplest and the shortest one ever conceived for a personal account. Download the app and see for yourself!'
            ],
            img: dblPhoneCircle,
            component: stores,
            componentRow: true,
            isRight: true
        }
    ]
}
export { secondContentData };
export default firstContentData;