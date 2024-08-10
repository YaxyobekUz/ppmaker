import React from "react";

const SpinLoader = ({
  iconSize = 24,
  className = "",
  iconColor = "#2D3250",
}) => {
  return (
    <div className={`${className}`}>
      <svg
        fill="none"
        width={iconSize}
        height={iconSize}
        title="loading..."
        viewBox="0 0 24 24"
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={iconColor}
          d="M12 1.5C12.1989 1.5 12.3897 1.57902 12.5303 1.71967C12.671 1.86032 12.75 2.05109 12.75 2.25V6.75C12.75 6.94891 12.671 7.13968 12.5303 7.28033C12.3897 7.42098 12.1989 7.5 12 7.5C11.8011 7.5 11.6103 7.42098 11.4697 7.28033C11.329 7.13968 11.25 6.94891 11.25 6.75V2.25C11.25 2.05109 11.329 1.86032 11.4697 1.71967C11.6103 1.57902 11.8011 1.5 12 1.5ZM12 16.5C12.1989 16.5 12.3897 16.579 12.5303 16.7197C12.671 16.8603 12.75 17.0511 12.75 17.25V21.75C12.75 21.9489 12.671 22.1397 12.5303 22.2803C12.3897 22.421 12.1989 22.5 12 22.5C11.8011 22.5 11.6103 22.421 11.4697 22.2803C11.329 22.1397 11.25 21.9489 11.25 21.75V17.25C11.25 17.0511 11.329 16.8603 11.4697 16.7197C11.6103 16.579 11.8011 16.5 12 16.5ZM22.5 12C22.5 12.1989 22.421 12.3897 22.2803 12.5303C22.1397 12.671 21.9489 12.75 21.75 12.75H17.25C17.0511 12.75 16.8603 12.671 16.7197 12.5303C16.579 12.3897 16.5 12.1989 16.5 12C16.5 11.8011 16.579 11.6103 16.7197 11.4697C16.8603 11.329 17.0511 11.25 17.25 11.25H21.75C21.9489 11.25 22.1397 11.329 22.2803 11.4697C22.421 11.6103 22.5 11.8011 22.5 12ZM7.5 12C7.5 12.1989 7.42098 12.3897 7.28033 12.5303C7.13968 12.671 6.94891 12.75 6.75 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3897 1.5 12.1989 1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4697C1.86032 11.329 2.05109 11.25 2.25 11.25H6.75C6.94891 11.25 7.13968 11.329 7.28033 11.4697C7.42098 11.6103 7.5 11.8011 7.5 12ZM4.575 4.575C4.71565 4.4344 4.90638 4.35541 5.10525 4.35541C5.30412 4.35541 5.49485 4.4344 5.6355 4.575L8.82 7.758C8.95662 7.89945 9.03221 8.0889 9.03051 8.28555C9.0288 8.4822 8.94992 8.67031 8.81086 8.80936C8.67181 8.94842 8.4837 9.0273 8.28705 9.02901C8.0904 9.03071 7.90095 8.95512 7.7595 8.8185L4.575 5.6355C4.4344 5.49485 4.35541 5.30412 4.35541 5.10525C4.35541 4.90638 4.4344 4.71565 4.575 4.575ZM15.1815 15.1815C15.3221 15.0409 15.5129 14.9619 15.7117 14.9619C15.9106 14.9619 16.1014 15.0409 16.242 15.1815L19.425 18.3645C19.5616 18.506 19.6372 18.6954 19.6355 18.8921C19.6338 19.0887 19.5549 19.2768 19.4159 19.4159C19.2768 19.5549 19.0887 19.6338 18.8921 19.6355C18.6954 19.6372 18.506 19.5616 18.3645 19.425L15.1815 16.242C15.0409 16.1014 14.9619 15.9106 14.9619 15.7117C14.9619 15.5129 15.0409 15.3221 15.1815 15.1815ZM19.425 4.5765C19.5651 4.71708 19.6438 4.90749 19.6438 5.106C19.6438 5.30451 19.5651 5.49492 19.425 5.6355L16.242 8.82C16.1005 8.95662 15.9111 9.03221 15.7144 9.03051C15.5178 9.0288 15.3297 8.94992 15.1906 8.81086C15.0516 8.67181 14.9727 8.4837 14.971 8.28705C14.9693 8.0904 15.0449 7.90095 15.1815 7.7595L18.3645 4.5765C18.5051 4.4359 18.6959 4.35691 18.8948 4.35691C19.0936 4.35691 19.2844 4.4359 19.425 4.5765ZM8.8185 15.1815C8.9591 15.3221 9.03809 15.5129 9.03809 15.7117C9.03809 15.9106 8.9591 16.1014 8.8185 16.242L5.6355 19.425C5.49405 19.5616 5.3046 19.6372 5.10795 19.6355C4.9113 19.6338 4.72319 19.5549 4.58414 19.4159C4.44508 19.2768 4.3662 19.0887 4.36449 18.8921C4.36279 18.6954 4.43838 18.506 4.575 18.3645L7.758 15.1815C7.89865 15.0409 8.08938 14.9619 8.28825 14.9619C8.48712 14.9619 8.67785 15.0409 8.8185 15.1815Z"
        />
      </svg>
    </div>
  );
};

export default SpinLoader;
