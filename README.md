# CareHippos

The CareHippos App is a decentralized application designed to allow users to submit their mood within the context of their communities, helping track the overall mental health and well-being of the community. Whether it’s an office department, a DAO, a hospital floor, or a hackathon sponsor, this app provides a simple and effective way to assess a community's emotional state.

By enabling users to vote via "mood submission", the app aggregates these votes to give a real-time, reputational, and quantitative assessment of the community's health. It helps community administrators identify potential conflicts, stress levels, and overall mood trends, empowering them to take action where needed.

The smart contracts are deployed on Morph Holesky Testnet.

## MoodCareHippoToken Smart Contracts - Morph Holesky Testnet

Base smart contract implementation available in `src/contracts/MoodCareHippoToken.md`

- Happy: 0x1a548e62d646D772300fEc90AcDA6d2EE1a03802
- Sad: 0xE08DbE01cA6632f8346b8971C91EC5952250a0a4
- Nervous: 0x31964A0E139711bDE7eC83b599CC96c2b377506f
- Angry: 0xae1c1509f96a4dd362eb24693d7e6faf17Cd64cf
- Tired: 0x89C0661404b5913d58f650811fCfF6daFDfD186b
- Frustrated: 0xfB483df54Eb1840064d44537d5D3D90BFed531Ac

## Getting Started and Contract Addresses

Clone the repository and switch to the cloned repo folder.

Install dependencies:

```bash
npm install
```

Create an .env.local file and add your Dynamic Env Id, together with these contract addresses

```
NEXT_PUBLIC_DYNAMIC_ENV_ID="your-dynamic-env-id"

NEXT_PUBLIC_HAPPY_CHT_MORPH_HOLESKY_ADDRESS="0x1a548e62d646D772300fEc90AcDA6d2EE1a03802"
NEXT_PUBLIC_SAD_CHT_MORPH_HOLESKY_ADDRESS="0xE08DbE01cA6632f8346b8971C91EC5952250a0a4"
NEXT_PUBLIC_NERV_CHT_MORPH_HOLESKY_ADDRESS="0x31964A0E139711bDE7eC83b599CC96c2b377506f"
NEXT_PUBLIC_ANGRY_CHT_MORPH_HOLESKY_ADDRESS="0xae1c1509f96a4dd362eb24693d7e6faf17Cd64cf"
NEXT_PUBLIC_TIRED_CHT_MORPH_HOLESKY_ADDRESS="0x89C0661404b5913d58f650811fCfF6daFDfD186b"
NEXT_PUBLIC_FRUST_CHT_MORPH_HOLESKY_ADDRESS="0xfB483df54Eb1840064d44537d5D3D90BFed531Ac"
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser and start minting.
