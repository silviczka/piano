import { HIT_THRESHOLD } from '../../constants/constants';

const HitZone = ({ hitZoneCenter }) => {
  return (
    <div
      style={{
        position: 'absolute',
        // display: 'flex',
        // justifyContent: 'center',
        left: `${hitZoneCenter - HIT_THRESHOLD}px`,
        // bottom: '5%',
        bottom: 0,
        top: 0,
        width: `${HIT_THRESHOLD * 2}px`,
        // height: '90%',
        backgroundColor: 'rgba(79, 152, 161, 0.2)',
        border: '5px solid rgba(115, 250, 243, 0.9)',
        borderRadius: 50,
        zIndex: 2,
        pointerEvents: 'none',
      }}
    ></div>
  );
};

export default HitZone;
