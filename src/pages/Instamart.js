import { useState } from "react";

export const Section = (props) => {
  const { title, desc, isVisible, setIsVisible } = props;

  function toggleHandler() {
    setIsVisible(true);  
  }
  return (
    <>
      {isVisible ? (
        <div
          className=" text-center border border-gray-500 rounded-md m-3 bg-teal-50 shadow-md cursor-pointer"
          onClick={toggleHandler}
        >
          <h1 className=" text-blue-400 font-semibold text-lg ">{title}</h1>
          <p className=" text-gray-500">{desc}</p>
        </div>
      ) : (
        <button
          className=" bg-teal-400 py-2 mx-3 p-2 rounded-md text-white"
          onClick={() => setIsVisible(true)}
        >
          Show {props.title}
        </button>
      )}
    </>
  );
};

const Instamart = () => {
//   const [config, setConfig] = useState({
//     showAbout: false,
//     showTeam: false,
//     showCareer: false,
//   });
  const [visibleSection,setIsVisibleSection]=useState('team')
  return (
    <div>
      <h1 className=" text-center text-2xl p-3">InstaMart</h1>
      <Section
        title="About Instamart"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        // isVisible={config.showAbout}
        isVisible={visibleSection==="about"}
        setIsVisible={()=>setIsVisibleSection("about")}
        // setIsVisible={() =>
        //   setConfig({
            //     showAbout: true,
            //     showTeam: false,
            //     showCareer: false,
            //   })
        // }
      />
      <Section
        title="Team Instamart"
        desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
        // isVisible={config.showTeam}
        isVisible={visibleSection==="team"}
        setIsVisible={()=>setIsVisibleSection("team")}
        // setIsVisible={() =>
        //   setConfig({
        //     showAbout: false,
        //     showTeam: true,
        //     showCareer: false,
        //   })
        // }
      />
      <Section
        title="Careeer Instamart"
        desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus"
        // isVisible={config.showCareer}
        isVisible={visibleSection==="career"}
        setIsVisible={()=>setIsVisibleSection("career")}
        // setIsVisible={() =>
        //   setConfig({
        //     showAbout: false,
        //     showTeam: false,
        //     showCareer: true,
        //   })
        // }
      />
    </div>
  );
};

export default Instamart;
