import "font-awesome/css/font-awesome.css";
import "../styling/socialSharing.css";

const SocialMediaSharing = () => {
  return (
    <ul className="social-media-list">
      <li>
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle-o fa-stack-2x"></i>
          <i class="fa fa-instagram fa-stack-1x"></i>
        </span>
      </li>
      <li>
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle-o fa-stack-2x"></i>
          <i class="fa fa-whatsapp fa-stack-1x"></i>
        </span>
      </li>
      <li>
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle-o fa-stack-2x"></i>
          <i class="fa fa fa-linkedin fa-stack-1x"></i>
        </span>
      </li>
      <li>
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle-o fa-stack-2x"></i>
          <i class="fa fa-facebook fa-stack-1x"></i>
        </span>
      </li>
      <li>
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle-o fa-stack-2x"></i>
          <i class="fa fa-twitter fa-stack-1x"></i>
        </span>
      </li>
      <li>
        <span class="fa-stack fa-lg">
          <i class="fa fa-circle-o fa-stack-2x"></i>
          <i class="fa fa-share fa-stack-1x"></i>
        </span>
      </li>
    </ul>
  );
};
export default SocialMediaSharing;
