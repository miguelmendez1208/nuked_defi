
const HamburgerIcon = ({className=""}:any) => {
    return (
<svg className={className} width="512px" height="512px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="352" height="32" x="80" y="96" fill="var(--ci-primary-color, currentColor)" className="ci-primary"/>
  <rect width="352" height="32" x="80" y="240" fill="var(--ci-primary-color, currentColor)" className="ci-primary"/>
  <rect width="352" height="32" x="80" y="384" fill="var(--ci-primary-color, currentColor)" className="ci-primary"/>
</svg>

    );
};
export default HamburgerIcon;
