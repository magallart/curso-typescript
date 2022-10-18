(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upperCase: boolean = false
  ): string => {
    if (upperCase) {
      return `${firstName} ${lastName || 'noLastName'}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || 'noLastName'}`;
    }
  };

  const name = fullName('Tony', 'Stark', true);
  console.log({ name });
})();
