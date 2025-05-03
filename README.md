# Project Campus Book
A Modern Facebook alternative for Schools and Colleges. Connect with your students without the social app distractions

#### Ignite Your Passion. Reach the World
Campus Book empowers educators to build thriving online classrooms, discussions, connecting you with students across campus

#### Overwhelmed by the Admin work?
The logistics of running a class online can dim that flame. Campus Book was born from the belief that every teacher and student deserves a dedicated platform .

We've built a simple, powerful platform that breaks down the barriers of traditional classrooms, empowering educators to connect with students anywhere, anytime. Unlock your potential to reach eager minds across the globe.

> Focus on what you do best: inspiring the next generation. Campus Book handles the rest.

And there is more to come?
Campus Book is not just a software its an ecosystem

## Local Setup
1. Clone the repo

```
git clone https://github.com/bitsofmandal-com/campusbook.git
```

2. Check yarn version (you need yarn@4.5.0). If your yarn version is yarn@1.X.X the run the below commands

```
corepack enable
corepack prepare yarn@4.5.0 --activate
```
3. Install Dependencies

```
yarn install
```

4. Install dependencies of Backend

```
cd backend
go mod tidy
docker-compose up -d
air server --port 8080
```

5. Run locally

```
yarn dev
```
