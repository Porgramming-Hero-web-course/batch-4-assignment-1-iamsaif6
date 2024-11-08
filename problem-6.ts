{
  interface Profile {
    name: string;
    age: number;
    email: string;
  }
  function updateProfile(currentProfile: Profile, updates: Partial<Profile>): Profile {
    return { ...currentProfile, ...updates };
  }
  const currentProfile: Profile = { name: 'Saif', age: 30, email: 'saif@mail.com' };
  const newProfile = updateProfile(currentProfile, { age: 55 });
  console.log(newProfile);
}
