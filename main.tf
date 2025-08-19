terraform {
  required_providers {
    netlify = {
      source  = "netlify/netlify"
      version = "~> 0.2.3"  # Use the latest version
    }
  }

  backend "remote" {
    organization = "Samie_HUG"  # Replace with your HCP organization name

    workspaces {
      name = "Portfolio_H"  # Your workspace name in HCP
    }
  }
}

provider "netlify" {
  token = var.netlify_token  # Use a variable for the Netlify token
}

resource "netlify_site" "hug_ibadan" {
  name = var.site_name  # Use a variable for the site name

  repo {
    repo_branch = "main"
    repo_path   = "site"  # Path to your static files
  }
}

output "site_url" {
  value = netlify_site.hug_ibadan.url
}