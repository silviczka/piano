import { HIT_THRESHOLD } from '../../constants/constants';

const HitZone = ({ hitZoneCenter }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${hitZoneCenter - HIT_THRESHOLD}px`,
        bottom: 0,
        top: 0,
        width: `${HIT_THRESHOLD * 2}px`,
        backgroundColor: 'rgba(79, 152, 161, 0.2)',
        border: '5px solid var(--main-color-dark)',
        borderRadius: 25,
        zIndex: 2,
        pointerEvents: 'none',
      }}
    ></div>
  );
};

export default HitZone;
