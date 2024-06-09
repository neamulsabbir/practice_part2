const PersonalProfile = ({ user,lang }) => {
  return (
    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-800 text-lg">{lang}</h3>
      </div>
      <div className="space-y-1">
        <h4 className="text-gray-700 font-medium">{user?.name}</h4>
        <p className="text-gray-800">{user?.email}</p>
        <p className="text-gray-800">{user?.phone}</p>
      </div>
    </div>
  );
};

export default PersonalProfile;
