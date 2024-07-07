const data = [
  {
    id: 6541232,
    status: "active",
    user: {
      role: "operator",
      id: 45135113,
      status: "active",

      profile: {
        id: 78453132541,
        phone: 453132,
        email: 453132,
        address: "x-y-z",
        country: "iran",
      },
    },
  },
  {
    id: 9764351.3,
    status: "active",
    user: {
      role: "operator",
      id: 98764541365,
      status: "active",

      profile: {
        id: 43656358456,
        phone: 453132,
        email: 453132,
        address: "x-y-z",
        country: "iran",
      },
    },
  },
  {
    id: 7845121324654,
    status: "active",
    user: {
      role: "operator",
      id: 79865431134,
      status: "inactive",
      profile: {
        id: 7892302659845,
        phone: 453132,
        email: 453132,
        address: "x-y-z",
        country: "iran",
      },
    },
  },
];

const extractFunction = () => {
  return data.map((item) => {
    return {
      relationId: item.id,
      user_id: item.user.id,
      user_status: item.user.status,
      profile_id: item.user.profile.id,
    };
  });
};

console.log(extractFunction());
