const awardsData = [
    {
      title: 'Winner - MakeHarvard',
      conference: 'Harvard University, USA',
      place: 'Massachusetts',
      image: '/awards/1.png'
    },
    {
      title: 'Winner - Bitcoin Bankathon',
      conference: 'Banco Hipotecario de El Salvador',
      place: 'El Salvador',
      image: '/awards/2.png'
    },
    {
      title: 'Winner - ETHPrague',
      conference: 'Ethereum Prague',
      place: 'Prague, Czechia',
      image: '/awards/3.png'
    },
    {
      title: 'Winner - ETHLisbon',
      conference: 'Ethereum Lisbon',
      place: 'Lisbon',
      image: '/awards/4.png'
    },
    {
      title: 'Winner - Bitcamp',
      conference: 'University of Maryland, USA',
      place: 'Maryland',
      image: '/awards/5.png'
    },
    {
      title: 'Winner - Darkathon',
      conference: 'Narcotics Control Bureau, Govt. of India',
      place: 'Chandigarh',
      image: '/awards/6.png'
    },
    {
      title: 'Winner - UNESCO-India Hackathon',
      conference: 'Ministry of Education, Govt. of India',
      place: 'Noida',
      image: '/awards/7.png'
    },
    {
      title: 'Winner - Facebook F8 Refresh Hackathon',
      conference: 'Meta Inc.',
      place: 'Online',
      image: '/awards/8.png'
    },
    {
      title: 'Winner - Hack Princeton',
      conference: 'Princeton University, USA',
      place: 'Princeton',
      image: '/awards/9.png'
    },
    {
      title: 'Track Winner - hello:world',
      conference: 'UC Berkley, USA',
      place: 'California',
      image: '/awards/10.png'
    },
    {
      title: 'Winner - Cubethon',
      conference: 'Cubet Technologies',
      place: 'Kochi',
      image: '/awards/11.png'
    },
    {
      title: 'Winner - Steel Hacks',
      conference: 'University of Pittsburgh, USA',
      place: 'Pittsburgh',
      image: '/awards/12.png'
    },
    {
      title: 'Winner - Calvin Hacks',
      conference: 'Calvin University, USA',
      place: 'Michigan',
      image: '/awards/13.png'
    },
    {
      title: 'Winner - HackBU',
      conference: 'Binghampton University, USA',
      place: 'Michigan',
      image: '/awards/14.png'
    },
    {
      title: 'Winner - DeFi Summer',
      conference: 'Minority Programmers',
      place: 'Online',
      image: '/awards/15.png'
    },
    {
      title: 'Winner - RiceHacks',
      conference: 'Rice University, USA',
      place: 'Texas',
      image: '/awards/16.png'
    },
    {
      title: 'Winner - MLH HueHacks',
      conference: 'Major League Hacking',
      place: 'Online',
      image: '/awards/17.png'
    },

        {
      title: 'Winner - WyoHackathon',
      conference: 'Wyoming Blockchain Stampede',
      place: 'Online',
      image: '/awards/18.png'
    },
    {
      title: 'Track Winner - Spacewarp',
      conference: 'ETHGlobal',
      place: 'Online',
      image: '/awards/23.png'
    },
    {
      title: 'Winner - CivHacks',
      conference: 'UC Berkley, USA',
      place: 'California',
      image: '/awards/19.png'
    },
    {
      title: 'Winner - RU Hacks',
      conference: 'Ryerson University, Canada',
      place: 'Canada',
      image: '/awards/20.png'
    },
    {
      title: 'Excellence - Presidential hackathon',
      conference: 'Taipei, Taiwan',
      place: 'California',
      image: '/awards/21.png'
    },
    {
      title: 'Winner - FOSS Hack 2021',
      conference: 'FOSS United',
      place: 'Online',
      image: '/awards/22.png'
    },
    {
      title: 'Track Winner - ETHGlobal Online',
      conference: 'ETHGlobal',
      place: 'Online',
      image: '/awards/23.png'
    },
    {
      title: 'Track Winner - ETHGlobal HackMoney',
      conference: 'ETHGlobal',
      place: 'Online',
      image: '/awards/23.png'
    },
    {
      title: 'Runner - GSEA Coimbatore',
      conference: 'Global Student Entrepreneur Awards',
      place: 'Coimbatore',
      image: '/awards/24.png'
    },
    {
      title: 'Winner - Smart India Hackathon',
      conference: 'Govrnment of India',
      place: 'Varanasi',
      image: '/awards/25.png'
    },
    {
      title: 'Winner - IITR Hackathon',
      conference: 'IITR',
      place: 'Online',
      image: '/awards/26.png'
    },
    {
      title: 'Track Winner - ETHGlobal Scaling Ethereum',
      conference: 'ETHGlobal',
      place: 'Online',
      image: '/awards/23.png'
    },
    {
      title: 'Runner - Karnataka Police Hackathon',
      conference: 'Police department, Karnataka',
      place: 'Bangalore',
      image: '/awards/27.png'
    },
    {
      title: 'Track Winner - Road To Web3',
      conference: 'ETHGlobal',
      place: 'Online',
      image: '/awards/23.png'
    },
    {
      title: 'Winner - RiGathon',
      conference: 'Kumaraguru College of Technology',
      place: 'Coimbatore',
      image: '/awards/28.png'
    },
    {
      title: 'Winner - Hacknight',
      conference: 'Hacktoberfest 2020',
      place: 'Online',
      image: '/awards/29.png'
    },
    {
      title: 'Winner - JiniHack',
      conference: 'BookingJini',
      place: 'Online',
      image: '/awards/30.png'
    },
    {
      title: 'Track Winner - Web3Jam',
      conference: 'ETHGlobal',
      place: 'Online',
      image: '/awards/23.png'
    },
    {
      title: 'Track Winner - NFTHack',
      conference: 'ETHGlobal',
      place: 'Online',
      image: '/awards/23.png'
    },
    {
      title: 'Winner - Lets Upgrade Hackathon',
      conference: 'LetsUpgrade',
      place: 'Online',
      image: '/awards/31.png'
    },
    {
      title: 'Winner - Hack Bells',
      conference: 'Sree Buddha College of Engineering',
      place: 'Kerala',
      image: '/awards/32.png'
    },
    {
      title: 'Winner - Global Peacethon',
      conference: 'Cyberpeace Foundation',
      place: 'Kerala',
      image: '/awards/34.png'
    },
    {
      title: 'Track Winner - Garuda Hacks',
      conference: 'Garuda Hacks',
      place: 'Indonesia',
      image: '/awards/35.png'
    },
  ];
  
  export default awardsData;