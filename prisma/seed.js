const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
    try {
        await prisma.user.upsert({
            where: {
                id: 1,
            },
            update: {},
            create: {
                id: 1,
                name: 'Сергей',
                contentToken: '123abcd'
            }
        });

        await prisma.user.upsert({
            where: {
                id: 2,
            },
            update: {},
            create: {
                id: 2,
                name: 'Влад',
            },
        });

        await prisma.user.upsert({
            where: {
                id: 3,
            },
            update: {},
            create: {
                id: 3,
                name: 'Юлия',
            },
        });

        await prisma.user.upsert({
            where: {
                id: 4,
            },
            update: {},
            create: {
                id: 4,
                name: 'Анна',
            },
        });

        await prisma.user.upsert({
            where: {
                id: 5,
            },
            update: {},
            create: {
                id: 5,
                name: 'Роман',
            },
        });

        await prisma.user.upsert({
            where: {
                id: 6,
            },
            update: {},
            create: {
                id: 6,
                name: 'Борис',
            },
        });

        await prisma.user.upsert({
            where: {
                id: 7,
            },
            update: {},
            create: {
                id: 7,
                name: 'Иван',
            },
        });

        await prisma.user.upsert({
            where: {
                id: 8,
            },
            update: {},
            create: {
                id: 8,
                name: 'Лизавета',
            },
        });

        await prisma.user.upsert({
            where: {
                id: 9,
            },
            update: {},
            create: {
                id: 9,
                name: 'Павел',
            },
        });

        //Jobs

        await prisma.job.upsert({
            where: {
                id: 1,
            },
            update: {},
            create: {
                id: 1,
                title: 'Админ',
            }
        });

        await prisma.job.upsert({
            where: {
                id: 2,
            },
            update: {},
            create: {
                id: 2,
                title: 'Дизайнер',
            },
        });

        await prisma.job.upsert({
            where: {
                id: 3,
            },
            update: {},
            create: {
                id: 3,
                title: 'Аналитик',
            },
        });

        await prisma.job.upsert({
            where: {
                id: 4,
            },
            update: {},
            create: {
                id: 4,
                title: 'Девопс',
            },
        });

        await prisma.job.upsert({
            where: {
                id: 5,
            },
            update: {},
            create: {
                id: 5,
                title: 'Фронтендер',
            },
        });

    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();