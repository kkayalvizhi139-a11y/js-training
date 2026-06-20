interface Profile {
  displayName: string;
  bio?: string;
  website?: string;
  avatarUrl?: string;
}

function renderProfile(profile: Profile): string {
  let result = `Name: ${profile.displayName}\n`;

  if (profile.bio) {
    result += `Bio: ${profile.bio}\n`;
  } else {
    result += "Bio: No bio provided\n";
  }

  if (profile.website) {
    result += `Website: ${profile.website}\n`;
  }

  return result;
}

const profile1: Profile = {
  displayName: "Alice",
  bio: "Frontend Developer",
  website: "https://example.com",
  avatarUrl: "avatar.jpg"
};

const profile2: Profile = {
  displayName: "Bob"
};

console.log(renderProfile(profile1));
console.log(renderProfile(profile2));

/*
If we write profile.bio.toUpperCase()

TypeScript gives an error because bio is optional.
Its type is string | undefined. And undefined does not
have a toUpperCase() method. We must check that bio
exists before using string methods on it.
*/