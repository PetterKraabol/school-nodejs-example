# Vagrant Config
Vagrant.configure(2) do |config|

  # Vagrant box
  config.vm.box = "ubuntu/precise64"

  # Synced folder
  config.vm.synced_folder ".", "/nodejs-example"

  # Provisioning script
  config.vm.provision :shell, :path => "sh/provision.sh"

end
